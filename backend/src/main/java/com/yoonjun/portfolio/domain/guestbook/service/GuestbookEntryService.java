package com.yoonjun.portfolio.domain.guestbook.service;

import com.yoonjun.portfolio.domain.guestbook.domain.GuestbookEntry;
import com.yoonjun.portfolio.domain.guestbook.dto.CreateEntryRequest;
import com.yoonjun.portfolio.domain.guestbook.dto.DeleteEntryRequest;
import com.yoonjun.portfolio.domain.guestbook.dto.EntryResponse;
import com.yoonjun.portfolio.domain.guestbook.dto.UpdateEntryRequest;
import com.yoonjun.portfolio.domain.guestbook.repository.GuestbookEntryRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jakarta.persistence.EntityNotFoundException;

@Service
public class GuestbookEntryService {

    private final GuestbookEntryRepository repo;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public GuestbookEntryService(GuestbookEntryRepository repo) {
        this.repo = repo;
    }

    @Transactional
    public EntryResponse create(CreateEntryRequest req){
        String hash = encoder.encode(req.password());
        GuestbookEntry saved = repo.save(GuestbookEntry.create(req.nickname(), hash, req.content()));
        return toResponse(saved);
    }

    @Transactional(readOnly = true)
    public Page<EntryResponse> list(int page, int size){
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createdAt"));
        return repo.findByDeletedFalse(pageable).map(this::toResponse);
    }

    @Transactional(readOnly = true)
    public EntryResponse get(Long id){
        GuestbookEntry e = repo.findByIdAndDeletedFalse(id)
                .orElseThrow(() -> new EntityNotFoundException("Guestbook entry not found: "+id));
        return toResponse(e);
    }

    @Transactional
    public EntryResponse update(Long id, UpdateEntryRequest req){
        GuestbookEntry e = repo.findByIdAndDeletedFalse(id)
                .orElseThrow(() -> new EntityNotFoundException("Guestbook entry not found: "+id));
        if (!encoder.matches(req.password(), e.getPasswordHash()))
            throw new IllegalArgumentException("Password not matched");
        e.updateContent(req.content());
        return toResponse(e);
    }

    @Transactional
    public void delete(Long id, DeleteEntryRequest req){
        GuestbookEntry e = repo.findByIdAndDeletedFalse(id)
                .orElseThrow(() -> new EntityNotFoundException("Guestbook entry not found: "+id));
        if (!encoder.matches(req.password(), e.getPasswordHash()))
            throw new IllegalArgumentException("Password not matched");
        e.softDelete();
    }

    private EntryResponse toResponse(GuestbookEntry e){
        return new EntryResponse(e.getId(), e.getNickname(), e.getContent(), e.getCreatedAt());
    }
}

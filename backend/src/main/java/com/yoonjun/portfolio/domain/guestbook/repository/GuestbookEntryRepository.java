package com.yoonjun.portfolio.domain.guestbook.repository;

import com.yoonjun.portfolio.domain.guestbook.domain.GuestbookEntry;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GuestbookEntryRepository extends JpaRepository<GuestbookEntry, Long> {
    Page<GuestbookEntry> findByDeletedFalse(Pageable pageable);
    Optional<GuestbookEntry> findByIdAndDeletedFalse(Long id);
    Page<GuestbookEntry> findByNicknameContainingAndDeletedFalse(String q, Pageable pageable);
}

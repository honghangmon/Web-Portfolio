package com.yoonjun.portfolio.domain.guestbook.controller;

import com.yoonjun.portfolio.domain.guestbook.dto.CreateEntryRequest;
import com.yoonjun.portfolio.domain.guestbook.dto.DeleteEntryRequest;
import com.yoonjun.portfolio.domain.guestbook.dto.EntryResponse;
import com.yoonjun.portfolio.domain.guestbook.dto.UpdateEntryRequest;
import com.yoonjun.portfolio.domain.guestbook.service.GuestbookEntryService;
import com.yoonjun.portfolio.global.common.ApiResponse;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/guestbook")
public class GuestbookEntryController {

    private final GuestbookEntryService service;

    public GuestbookEntryController(GuestbookEntryService service) {
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ApiResponse<EntryResponse> create(@Valid @RequestBody CreateEntryRequest req){
        return ApiResponse.ok(service.create(req));
    }

    @GetMapping
    public ApiResponse<Page<EntryResponse>> list(@RequestParam(defaultValue = "0") int page,
                                                 @RequestParam(defaultValue = "10") int size){
        return ApiResponse.ok(service.list(page, size));
    }

    @GetMapping("/{id}")
    public ApiResponse<EntryResponse> get(@PathVariable Long id){
        return ApiResponse.ok(service.get(id));
    }

    @PutMapping("/{id}")
    public ApiResponse<EntryResponse> update(@PathVariable Long id,
                                             @Valid @RequestBody UpdateEntryRequest req){
        return ApiResponse.ok(service.update(id, req));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id, @Valid @RequestBody DeleteEntryRequest req){
        service.delete(id, req);
    }
}

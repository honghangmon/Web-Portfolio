package com.yoonjun.portfolio.domain.guestbook.dto;

import java.time.LocalDateTime;

public record EntryResponse(
        Long id,
        String nickname,
        String content,
        LocalDateTime createdAt
) {}

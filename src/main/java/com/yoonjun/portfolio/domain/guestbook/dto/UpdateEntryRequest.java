package com.yoonjun.portfolio.domain.guestbook.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record UpdateEntryRequest(
        @NotBlank @Size(min = 4, max = 50) String password,
        @NotBlank @Size(max = 1000) String content
) {}

package com.yoonjun.portfolio.domain.guestbook.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record DeleteEntryRequest(
        @NotBlank @Size(min = 4, max = 50) String password
) {}

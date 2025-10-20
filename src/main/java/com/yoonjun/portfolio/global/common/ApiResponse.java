package com.yoonjun.portfolio.global.common;

import com.fasterxml.jackson.annotation.JsonInclude;
import java.time.OffsetDateTime;

public record ApiResponse<T>(
        boolean success,
        @JsonInclude(JsonInclude.Include.NON_NULL) T data,
        @JsonInclude(JsonInclude.Include.NON_NULL) String code,
        @JsonInclude(JsonInclude.Include.NON_NULL) String message,
        String timestamp
) {
    public static <T> ApiResponse<T> ok(T data) {
        return new ApiResponse<>(true, data, null, null, OffsetDateTime.now().toString());
    }
    public static ApiResponse<Void> error(String code, String message) {
        return new ApiResponse<>(false, null, code, message, OffsetDateTime.now().toString());
    }
}

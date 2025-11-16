package com.yoonjun.portfolio.global.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            // CSRF는 프론트 연동 전까지는 일단 꺼두자 (나중에 필요하면 다시 설정)
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers(
                        "/api/**",
                        "/h2-console/**"
                ).permitAll()         // API, H2 콘솔은 모두 허용
                .anyRequest().permitAll()
            )
            // 기본 로그인 폼/HTTP Basic 다 끔 (원하면 남겨도 됨)
            .formLogin(form -> form.disable())
            .httpBasic(basic -> basic.disable());

        return http.build();
    }
}

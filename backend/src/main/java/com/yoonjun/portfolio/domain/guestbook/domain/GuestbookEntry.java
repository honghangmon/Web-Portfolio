package com.yoonjun.portfolio.domain.guestbook.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "guestbook_entry")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class GuestbookEntry {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable=false, length=30)
    private String nickname;

    @Column(name="password_hash", nullable=false, length=60)
    private String passwordHash;

    @Column(nullable=false, length=1000)
    private String content;

    @Column(nullable=false, updatable=false)
    private LocalDateTime createdAt;

    @Column(nullable=false)
    private LocalDateTime updatedAt;

    @Column(nullable=false)
    private boolean deleted = false;

    public static GuestbookEntry create(String nickname, String passwordHash, String content){
        GuestbookEntry e = new GuestbookEntry();
        e.nickname = nickname;
        e.passwordHash = passwordHash;
        e.content = content;
        e.createdAt = LocalDateTime.now();
        e.updatedAt = e.createdAt;
        e.deleted = false;
        return e;
    }

    public void updateContent(String content){
        this.content = content;
        this.updatedAt = LocalDateTime.now();
    }

    public void softDelete(){
        this.deleted = true;
        this.updatedAt = LocalDateTime.now();
    }
}

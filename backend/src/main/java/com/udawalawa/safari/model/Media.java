package com.udawalawa.safari.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "media")
public class Media {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String fileName;
    private String fileUrl;

    @Enumerated(EnumType.STRING)
    private MediaType type; // IMAGE or VIDEO

    private LocalDateTime uploadedAt = LocalDateTime.now();

    public enum MediaType {
        IMAGE, VIDEO
    }
}
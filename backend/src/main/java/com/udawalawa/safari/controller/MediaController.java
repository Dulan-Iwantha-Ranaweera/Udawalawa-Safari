package com.udawalawa.safari.controller;

import com.udawalawa.safari.model.Media;
import com.udawalawa.safari.service.MediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/media")
@CrossOrigin(origins = "http://localhost:5173")
public class MediaController {

    @Autowired
    private MediaService mediaService;

    @GetMapping
    public ResponseEntity<List<Media>> getAllMedia() {
        return ResponseEntity.ok(mediaService.getAllMedia());
    }

    @GetMapping("/images")
    public ResponseEntity<List<Media>> getImages() {
        return ResponseEntity.ok(mediaService.getByType(Media.MediaType.IMAGE));
    }

    @GetMapping("/videos")
    public ResponseEntity<List<Media>> getVideos() {
        return ResponseEntity.ok(mediaService.getByType(Media.MediaType.VIDEO));
    }

    @PostMapping("/upload")
    public ResponseEntity<Media> uploadMedia(
            @RequestParam("file") MultipartFile file,
            @RequestParam("title") String title,
            @RequestParam("description") String description,
            @RequestParam("type") String type) throws IOException {

        Media.MediaType mediaType = Media.MediaType.valueOf(type.toUpperCase());
        Media saved = mediaService.uploadMedia(file, title, description, mediaType);
        return ResponseEntity.ok(saved);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMedia(@PathVariable Long id) {
        mediaService.deleteMedia(id);
        return ResponseEntity.noContent().build();
    }
}
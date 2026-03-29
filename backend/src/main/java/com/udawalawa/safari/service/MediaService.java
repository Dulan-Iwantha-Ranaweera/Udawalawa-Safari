package com.udawalawa.safari.service;

import com.udawalawa.safari.model.Media;
import com.udawalawa.safari.repository.MediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.util.List;
import java.util.UUID;

@Service
public class MediaService {

    @Autowired
    private MediaRepository mediaRepository;

    @Value("${file.upload-dir}")
    private String uploadDir;

    public List<Media> getAllMedia() {
        return mediaRepository.findAll();
    }

    public List<Media> getByType(Media.MediaType type) {
        return mediaRepository.findByType(type);
    }

    public Media uploadMedia(MultipartFile file, String title,
                             String description, Media.MediaType type) throws IOException {
        String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
        Path uploadPath = Paths.get(uploadDir);

        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        Files.copy(file.getInputStream(), uploadPath.resolve(fileName),
                StandardCopyOption.REPLACE_EXISTING);

        Media media = new Media();
        media.setTitle(title);
        media.setDescription(description);
        media.setFileName(fileName);
        media.setFileUrl("/uploads/" + fileName);
        media.setType(type);

        return mediaRepository.save(media);
    }

    public void deleteMedia(Long id) {
        mediaRepository.deleteById(id);
    }
}
package com.udawalawa.safari.repository;

import com.udawalawa.safari.model.Media;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MediaRepository extends JpaRepository<Media, Long> {
    List<Media> findByType(Media.MediaType type);
}
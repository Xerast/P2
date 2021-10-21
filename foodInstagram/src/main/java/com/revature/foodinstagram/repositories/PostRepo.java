package com.revature.foodinstagram.repositories;

import com.revature.foodinstagram.beans.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface PostRepo extends JpaRepository<Post, Integer> {
}

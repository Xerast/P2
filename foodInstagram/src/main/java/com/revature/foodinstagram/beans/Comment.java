package com.revature.foodinstagram.beans;

import jdk.nashorn.internal.ir.annotations.Reference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "comments", schema="Project2")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Comment implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "comment_posterid")
    private User user;

    private String comment_header;
    private String comment_body;
<<<<<<< HEAD

=======
>>>>>>> 473349f0cbd285c803b61ddf328398759f2a83dc
    @Column(name = "ref_postid")
    private int postId;



}
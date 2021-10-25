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
>>>>>>> 5a2b7bbdf4e6c8dd3ed130bf7eef9d777ba9ef81
    @Column(name = "ref_postid")
    private int postId;



}
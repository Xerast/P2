package com.revature.foodinstagram.beans;

import javax.persistence.*;

@Entity
@Table(name = "posts", schema="Project2")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "postid")
    private int id;

    @ManyToOne
    @JoinColumn(name = "posterid")
    private com.revature.foodinstagram.beans.User user;

    private String title;
    private String body;
    private String image_url;

    @ManyToOne
    @JoinColumn(name = "rec_rest_id")
    private com.revature.foodinstagram.beans.Restaurant restaurant;

    private boolean recommend_rest;
    private int rating;

    public Post() {
    }

    public Post(User user, String title, String body, String image_url, Restaurant restaurant, boolean recommend_rest, int rating) {
        this.user = user;
        this.title = title;
        this.body = body;
        this.image_url = image_url;
        this.restaurant = restaurant;
        this.recommend_rest = recommend_rest;
        this.rating = rating;
    }

    public Post(int id, User user, String title, String body, String image_url, Restaurant restaurant, boolean recommend_rest, int rating) {
        this.id = id;
        this.user = user;
        this.title = title;
        this.body = body;
        this.image_url = image_url;
        this.restaurant = restaurant;
        this.recommend_rest = recommend_rest;
        this.rating = rating;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    public boolean isRecommend_rest() {
        return recommend_rest;
    }

    public void setRecommend_rest(boolean recommend_rest) {
        this.recommend_rest = recommend_rest;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", user=" + user +
                ", title='" + title + '\'' +
                ", body='" + body + '\'' +
                ", image_url='" + image_url + '\'' +
                ", restaurant=" + restaurant +
                ", recommend_rest=" + recommend_rest +
                ", rating=" + rating +
                '}';
    }

}

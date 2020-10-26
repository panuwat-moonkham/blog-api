"use strict";

const Post = use('App/Models/Post')

class PostController {
  index() {
    const posts = await Post.all()
    return { status: 200, data: posts };
  }

  show({ request }) {
    const { id } = request.params;
    const post =await Post.find(id)
    return {status: 200, data: post}
  }

  store({request}){
    const {title, name, cover_image_url, auther} = request.body
    const post = await Post.create({
      title,
      name,
      cover_image_url,
      auther_id: auther
    })
    return {status: 200, data: post}
  }
}

module.exports = PostController;

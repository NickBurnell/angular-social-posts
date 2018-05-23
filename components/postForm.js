"use strict";
const postForm = {
    bindings: {
      addPost: "&"
    },
    template: `
    <form ng-submit="$ctrl.addPost({ newPost: $ctrl.newPost});">
        <h3>Title</h3
        <input type="text" placeholder="Post Title.." ng-model="$ctrl.newPost.postTitle">
        <h3>Thought</h3>
        <textarea placeholder="What are you thinking about?.." ng-model="$ctrl.newPost.content" cols="30" rows="10"></textarea>
        <button>Add Post</button>
    </form>
    `
  };
  
  angular
    .module("socialPostApp")
    .component("postForm", postForm);
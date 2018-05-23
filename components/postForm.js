"use strict";
const postForm = {
    bindings: {
      addPost: "&"
    },
    template: `
    <button ng-click="$ctrl.showForm();">New Thought</button>
    <form ng-submit="$ctrl.addPost({ newPost: $ctrl.newPost}); $ctrl.closeForm();" ng-show="$ctrl.show" >
        <p ng-click="$ctrl.closeForm();">X</p>
        <h3>New Posts</h3>
        <label>Title</label>
        <input type="text" placeholder="Post Title.." ng-model="$ctrl.newPost.postTitle">
        <label>Thought</label>
        <textarea placeholder="What are you thinking about?.." ng-model="$ctrl.newPost.content" cols="30" rows="10"></textarea>
        <button>Add Post</button>
    </form>
    `,
    controller: function() {
        const vm = this;
        vm.showForm = () => {
            vm.show = true;
        };
        vm.closeForm = () => {
            vm.show = false;
            vm.newPost = {};
        };
    }
  };
  
  angular
    .module("socialPostApp")
    .component("postForm", postForm);
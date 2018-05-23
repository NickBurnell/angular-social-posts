"use strict";
// parent component
const socialPosts = {
    template: `
    <div>
        <h1>My thoughts</h1>
        <post-form add-post="$ctrl.addPost(newPost);"></post-form>
        <section>
            <post my-posts="$ctrl.myPosts"></post>
        </section>
    </div>
    `,
    controller: function () {
        const vm = this;
        vm.myPosts = [];
        vm.addPost = (newPost) => {
            vm.myPosts.push({
              postTitle: newPost.postTitle,
              content: newPost.content
            });
            
        };
    }
};

angular
    .module("socialPostApp")
    .component("socialPosts", socialPosts);
"use strict";
// parent component
const socialPosts = {
    template: `
    <div>
        <h1>My thoughts</h1>
        
        <div>
            <button>New Thought</button>
        </div>
        <postForm add-post="$ctrl.addPost(newPost);"></postForm>
        <post my-posts="$ctrl.myPosts"></post>
    </div>
    `,
    controller: function ($element) {
        const vm = this;
        vm.myPosts = [
            {
                postTitle: "Dog",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorum consequuntur, fugiat consequatur atque veniam neque corporis recusandae aspernatur animi dolorem nam eaque saepe reprehenderit libero quae necessitatibus error ipsum."
            },
            {
                postTitle: "Cat",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorum consequuntur, fugiat consequatur atque veniam neque corporis recusandae aspernatur animi dolorem nam eaque saepe reprehenderit libero quae necessitatibus error ipsum."
            }
        ];
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
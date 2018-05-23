"use strict";

const post = {
    bindings: {
      myPosts: "<"
    },
    template: `
    <section>
      <div ng-show="$ctrl.myPosts[0]" ng-repeat="item in $ctrl.myPosts">
       <p>{{ item.postTitle }}</p>
       <p>{{ item.content }}</p>
       </div>
      <p ng-hide="$ctrl.myPosts[0]"> {{ $ctrl.warning }}</p>
    </section>
    `,
    controller: function() {
      const vm = this;
      vm.$onInit = () => {
        if (!vm.myPosts[0]) {
          vm.warning = "You have no posts.. Please add some posts..";
        }
      };
    }
  };
  
  angular
    .module("socialPostApp")
    .component("post", post);
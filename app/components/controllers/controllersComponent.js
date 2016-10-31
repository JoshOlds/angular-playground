; (function () {
  angular.module('angularPlayground')
    .component('controllersComponent', {
      controller: ControllersController,
      templateUrl: '/app/components/controllers/controllers.html'
    })

  function ControllersController() {
    this.controllersStatus = 'Working'
    this.friends = ['Joey', 'Chandler', 'Monica', 'Phebes', 'Ross & Rachel'];
    this.newFriend = "";


    this.addFriend = function addFriend(input) {
      this.friends.push(input);
      this.newFriend = "";
      console.log("adding Friend: " + this.newFriend)
    }

    this.removeFriend = function removeFriend(name) {
      var index = this.friends.indexOf(name, 1);
      if (index > -1) {
        this.friends.splice(index, 1);
      }
    }

  }


} ())

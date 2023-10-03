AFRAME.registerComponent("sped", {
    init: function () {
        var cam = document.querySelector("#camera-rig");
        pos = cam.getAttribute("position");
    },
})
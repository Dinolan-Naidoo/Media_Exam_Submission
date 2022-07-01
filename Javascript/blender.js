import {GLTFLoader} from "../Javascript/GLTFLoader.js";



var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth/window.innerHeight+20,
    .01,
    1000
);

var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var loader = new GLTFLoader();

var obj;
loader.load("../Images/1842861_DinolanNaidoo_WSOA2026_2020_ExamGame_Weapon.gltf", function(gltf)
{
    
    obj = gltf.scene;
    scene.add(gltf.scene);
    animate();
    
})

var light = new THREE.HemisphereLight(0xffffff , 0x000000,2);
scene.background = new THREE.Color(0xffffff);

scene.add(light);

camera.position.set(0,1,6);

function animate(){
    requestAnimationFrame(animate);
    obj.rotation.y += 0.02;
    renderer.render(scene,camera);
}

window.addEventListener("resize", function()
{
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
})





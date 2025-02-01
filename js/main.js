import * as THREE from 'three';

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color('#0a0a0a');
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ 
    canvas: document.querySelector('#webgl'),
    antialias: true 
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Create grid
const gridSize = 20;
const gridDivisions = 20;
const gridMaterial = new THREE.LineBasicMaterial({ 
    color: 0x00ffff,
    transparent: true,
    opacity: 0.5
});

const grid = new THREE.GridHelper(gridSize, gridDivisions, 0x00ffff, 0x00ffff);
grid.material.opacity = 0.1;
grid.material.transparent = true;
grid.position.y = -2;
scene.add(grid);

// Camera position
camera.position.z = 15;
camera.position.y = 2;
camera.lookAt(0, 0, 0);

// Animation
const clock = new THREE.Clock();

const animate = () => {
    const elapsedTime = clock.getElapsedTime();
    
    // Animate grid
    grid.position.z = (elapsedTime * 2) % 2;
    
    // Render
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
};

animate();

// Handle resize
window.addEventListener('resize', () => {
    // Update camera
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    
    // Update renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

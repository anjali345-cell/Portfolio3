'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: false, // Disable antialiasing for better performance
      powerPreference: 'high-performance', // Use high-performance GPU
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Cap pixel ratio for performance
    camera.position.z = 3;

    // Reduced wave plane (less segments for better performance)
    const geometry = new THREE.PlaneGeometry(15, 15, 25, 25); // Reduced from 50x50
    const material = new THREE.MeshBasicMaterial({ // Changed to MeshBasicMaterial (no lighting calculations)
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 3;
    scene.add(plane);

    // Reduced spheres (from 50 to 20)
    const sphereGeometry = new THREE.SphereGeometry(0.05, 6, 6); // Reduced segments
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.6,
    });

    const spheres: THREE.Mesh[] = [];
    for (let i = 0; i < 20; i++) { // Reduced from 50
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5
      );
      spheres.push(sphere);
      scene.add(sphere);
    }

    // Reduced lines (from 30 to 15)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.2,
    });

    const lines: THREE.Line[] = [];
    for (let i = 0; i < 15; i++) { // Reduced from 30
      const points = [];
      for (let j = 0; j < 2; j++) {
        points.push(
          new THREE.Vector3(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 5
          )
        );
      }
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeometry, lineMaterial);
      lines.push(line);
      scene.add(line);
    }

    // Simplified lighting (removed point lights)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Mouse tracking with throttling
    let mouseX = 0;
    let mouseY = 0;
    let lastMouseUpdate = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const now = Date.now();
      if (now - lastMouseUpdate < 50) return; // Throttle to every 50ms
      lastMouseUpdate = now;
      
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Animation with frame skipping
    const clock = new THREE.Clock();
    let frameCount = 0;

    const animate = () => {
      frameCount++;
      const elapsedTime = clock.getElapsedTime();

      // Update wave (every frame)
      const positions = geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const wave1 = Math.sin(x * 0.5 + elapsedTime) * 0.3;
        const wave2 = Math.sin(y * 0.5 + elapsedTime * 0.8) * 0.3;
        positions.setZ(i, wave1 + wave2);
      }
      positions.needsUpdate = true;

      plane.rotation.z = elapsedTime * 0.1;

      // Update spheres (skip every other frame)
      if (frameCount % 2 === 0) {
        spheres.forEach((sphere, i) => {
          sphere.position.y += Math.sin(elapsedTime + i) * 0.002;
          sphere.position.x += Math.cos(elapsedTime + i) * 0.002;
        });
      }

      // Camera movement (smoother, less frequent updates)
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.03;
      camera.position.y += (mouseY * 2 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Optimized resize handler with debouncing
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }, 250);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      // Proper cleanup
      geometry.dispose();
      material.dispose();
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.5 }}
    />
  );
};

export default ThreeBackground;
import { Compass, Move3d, MousePointer2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const focusPoints = {
  genel: { label: "Genel bakış", camera: new THREE.Vector3(16, 10, 18), target: new THREE.Vector3(0, 0, 0) },
  havuz: { label: "Havuz", camera: new THREE.Vector3(8, 4.8, 11), target: new THREE.Vector3(0, -0.2, 0) },
  egitim: { label: "Eğitim alanı", camera: new THREE.Vector3(-10, 5.5, 8), target: new THREE.Vector3(-4, 0.4, 0) },
  tesis: { label: "Tesis", camera: new THREE.Vector3(12, 7, -14), target: new THREE.Vector3(2, 1.2, 0) },
};

export function PoolExperience() {
  const mountRef = useRef(null);
  const focusRef = useRef(() => {});
  const [activeFocus, setActiveFocus] = useState("genel");
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      setFallback(true);
      return undefined;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.domElement.setAttribute("aria-label", "Etkileşimli üç boyutlu Kumsal yüzme havuzu");
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x062746, 0.026);
    const camera = new THREE.PerspectiveCamera(48, mount.clientWidth / mount.clientHeight, 0.1, 120);
    camera.position.copy(focusPoints.genel.camera);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.055;
    controls.minDistance = 5;
    controls.maxDistance = 34;
    controls.maxPolarAngle = Math.PI * 0.48;
    controls.target.copy(focusPoints.genel.target);

    scene.add(new THREE.HemisphereLight(0xbceeff, 0x05203c, 2.4));
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.5);
    keyLight.position.set(8, 14, 10);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    scene.add(keyLight);
    const cyanLight = new THREE.PointLight(0x1fd8ef, 55, 30, 2);
    cyanLight.position.set(-8, 5, 3);
    scene.add(cyanLight);
    const orangeLight = new THREE.PointLight(0xff8a24, 24, 24, 2);
    orangeLight.position.set(10, 3, -8);
    scene.add(orangeLight);

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(48, 34),
      new THREE.MeshStandardMaterial({ color: 0x0a2944, roughness: 0.78, metalness: 0.12 }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1.25;
    floor.receiveShadow = true;
    scene.add(floor);

    const poolShell = new THREE.Mesh(
      new THREE.BoxGeometry(29, 1.4, 13.5),
      new THREE.MeshStandardMaterial({ color: 0xdceef2, roughness: 0.25, metalness: 0.08 }),
    );
    poolShell.position.y = -0.65;
    poolShell.receiveShadow = true;
    scene.add(poolShell);

    const waterGeometry = new THREE.PlaneGeometry(27.8, 12.2, 72, 34);
    const basePositions = Float32Array.from(waterGeometry.attributes.position.array);
    const water = new THREE.Mesh(
      waterGeometry,
      new THREE.MeshPhysicalMaterial({
        color: 0x0cb8db,
        emissive: 0x033f66,
        emissiveIntensity: 0.32,
        roughness: 0.12,
        metalness: 0.05,
        transmission: 0.18,
        transparent: true,
        opacity: 0.88,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        side: THREE.DoubleSide,
      }),
    );
    water.rotation.x = -Math.PI / 2;
    water.position.y = 0.08;
    water.receiveShadow = true;
    scene.add(water);

    const ropeMaterial = new THREE.MeshStandardMaterial({ color: 0xff8a20, roughness: 0.45 });
    for (let lane = -4; lane <= 4; lane += 2) {
      const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 27.2, 10), ropeMaterial);
      rope.rotation.z = Math.PI / 2;
      rope.position.set(0, 0.24, lane);
      rope.castShadow = true;
      scene.add(rope);
      for (let x = -12; x <= 12; x += 1.15) {
        const float = new THREE.Mesh(new THREE.SphereGeometry(0.095, 8, 8), ropeMaterial);
        float.position.set(x, 0.27, lane);
        scene.add(float);
      }
    }

    const tileMaterial = new THREE.MeshStandardMaterial({ color: 0xeaf7f8, roughness: 0.4 });
    const longDeckA = new THREE.Mesh(new THREE.BoxGeometry(31, 0.28, 2.2), tileMaterial);
    longDeckA.position.set(0, 0.1, 7.85);
    longDeckA.receiveShadow = true;
    scene.add(longDeckA);
    const longDeckB = longDeckA.clone();
    longDeckB.position.z = -7.85;
    scene.add(longDeckB);
    const shortDeckA = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.28, 13.7), tileMaterial);
    shortDeckA.position.set(15.6, 0.1, 0);
    scene.add(shortDeckA);
    const shortDeckB = shortDeckA.clone();
    shortDeckB.position.x = -15.6;
    scene.add(shortDeckB);

    const beamMaterial = new THREE.MeshStandardMaterial({ color: 0x9cc7d2, metalness: 0.68, roughness: 0.26 });
    for (let x = -16; x <= 16; x += 4) {
      const beam = new THREE.Mesh(new THREE.BoxGeometry(0.22, 8, 0.22), beamMaterial);
      beam.position.set(x, 3, -9.2);
      beam.castShadow = true;
      scene.add(beam);
    }
    const glassWall = new THREE.Mesh(
      new THREE.BoxGeometry(34, 8, 0.12),
      new THREE.MeshPhysicalMaterial({ color: 0x8bd9ed, transparent: true, opacity: 0.19, roughness: 0.08, metalness: 0.25 }),
    );
    glassWall.position.set(0, 3, -9.3);
    scene.add(glassWall);

    const swimmerMaterial = new THREE.MeshStandardMaterial({ color: 0xff8a20, roughness: 0.4 });
    const swimmers = [];
    [-3, 1, 3].forEach((lane, index) => {
      const swimmer = new THREE.Group();
      const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.18, 0.75, 6, 10), swimmerMaterial);
      body.rotation.z = Math.PI / 2;
      swimmer.add(body);
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 12), swimmerMaterial);
      head.position.x = 0.62;
      swimmer.add(head);
      swimmer.position.set(-8 + index * 5.5, 0.46, lane);
      scene.add(swimmer);
      swimmers.push(swimmer);
    });

    const bubbleCount = 140;
    const bubblePositions = new Float32Array(bubbleCount * 3);
    for (let i = 0; i < bubbleCount; i += 1) {
      bubblePositions[i * 3] = (Math.random() - 0.5) * 30;
      bubblePositions[i * 3 + 1] = Math.random() * 9;
      bubblePositions[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }
    const bubblesGeometry = new THREE.BufferGeometry();
    bubblesGeometry.setAttribute("position", new THREE.BufferAttribute(bubblePositions, 3));
    const bubbles = new THREE.Points(
      bubblesGeometry,
      new THREE.PointsMaterial({ color: 0x9df2ff, size: 0.055, transparent: true, opacity: 0.72 }),
    );
    scene.add(bubbles);

    const cameraGoal = camera.position.clone();
    const targetGoal = controls.target.clone();
    const keys = new Set();
    const diagnostic = { sceneReady: true, activeFocus: "genel", interactions: 0 };
    const focus = (key) => {
      const point = focusPoints[key];
      if (!point) return false;
      cameraGoal.copy(point.camera);
      targetGoal.copy(point.target);
      diagnostic.activeFocus = key;
      diagnostic.interactions += 1;
      setActiveFocus(key);
      return true;
    };
    focusRef.current = focus;

    const move = (right, forward, countInteraction = true) => {
      const direction = new THREE.Vector3();
      camera.getWorldDirection(direction);
      direction.y = 0;
      direction.normalize();
      const side = new THREE.Vector3().crossVectors(direction, camera.up).normalize();
      const offset = direction.multiplyScalar(forward).add(side.multiplyScalar(right));
      camera.position.add(offset);
      controls.target.add(offset);
      cameraGoal.copy(camera.position);
      targetGoal.copy(controls.target);
      if (countInteraction) diagnostic.interactions += 1;
    };

    window.__kumsal3D = {
      focus,
      move,
      getState: () => ({
        ...diagnostic,
        camera: camera.position.toArray().map((value) => Number(value.toFixed(2))),
        target: controls.target.toArray().map((value) => Number(value.toFixed(2))),
      }),
    };

    const onKeyDown = (event) => {
      if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) return;
      const key = event.key.toLowerCase();
      if (["w", "a", "s", "d", "arrowup", "arrowdown", "arrowleft", "arrowright"].includes(key)) {
        keys.add(key);
        diagnostic.interactions += 1;
      }
    };
    const onKeyUp = (event) => keys.delete(event.key.toLowerCase());
    const onPointer = () => { diagnostic.interactions += 1; };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    renderer.domElement.addEventListener("pointerdown", onPointer);
    renderer.domElement.addEventListener("wheel", onPointer, { passive: true });

    let previousTime = performance.now();
    let elapsed = 0;
    let animationFrame;
    const animate = () => {
      const currentTime = performance.now();
      const delta = Math.min((currentTime - previousTime) / 1000, 0.04);
      previousTime = currentTime;
      elapsed += delta;
      const positions = waterGeometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const x = basePositions[i];
        const y = basePositions[i + 1];
        positions[i + 2] = Math.sin(x * 0.58 + elapsed * 1.55) * 0.075 + Math.cos(y * 0.72 + elapsed * 1.18) * 0.055;
      }
      waterGeometry.attributes.position.needsUpdate = true;
      waterGeometry.computeVertexNormals();
      swimmers.forEach((swimmer, index) => {
        swimmer.position.x += (0.65 + index * 0.08) * delta;
        swimmer.position.y = 0.44 + Math.sin(elapsed * 2.2 + index) * 0.045;
        if (swimmer.position.x > 12.5) swimmer.position.x = -12.5;
      });
      bubbles.rotation.y = elapsed * 0.018;

      const speed = 4.2 * delta;
      if (keys.has("w") || keys.has("arrowup")) move(0, speed, false);
      if (keys.has("s") || keys.has("arrowdown")) move(0, -speed, false);
      if (keys.has("a") || keys.has("arrowleft")) move(-speed, 0, false);
      if (keys.has("d") || keys.has("arrowright")) move(speed, 0, false);
      camera.position.lerp(cameraGoal, 0.035);
      controls.target.lerp(targetGoal, 0.035);
      controls.update();
      renderer.render(scene, camera);
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    const resizeObserver = new ResizeObserver(() => {
      if (!mount.clientWidth || !mount.clientHeight) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    });
    resizeObserver.observe(mount);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      renderer.domElement.removeEventListener("pointerdown", onPointer);
      controls.dispose();
      renderer.dispose();
      scene.traverse((item) => {
        item.geometry?.dispose?.();
        if (Array.isArray(item.material)) item.material.forEach((material) => material.dispose());
        else item.material?.dispose?.();
      });
      renderer.domElement.remove();
      delete window.__kumsal3D;
    };
  }, []);

  return (
    <div className={`pool-experience${fallback ? " is-fallback" : ""}`}>
      <div className="pool-canvas" ref={mountRef} />
      <div className="experience-topline">
        <span><span className="live-dot" /> CANLI 3B TESİS</span>
        <span className="desktop-control"><MousePointer2 size={15} /> Sürükle</span>
        <span className="desktop-control"><Move3d size={15} /> WASD / oklar</span>
      </div>
      <div className="scene-focus" aria-label="Üç boyutlu sahne odakları">
        {Object.entries(focusPoints).map(([key, point]) => (
          <button className={activeFocus === key ? "is-active" : ""} key={key} type="button" onClick={() => focusRef.current(key)}>
            <Compass size={15} /> {point.label}
          </button>
        ))}
      </div>
      {fallback && <p className="webgl-fallback">3B görünüm bu cihazda desteklenmiyor; tesis görseli gösteriliyor.</p>}
    </div>
  );
}

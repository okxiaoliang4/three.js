var scene, camera, renderer, light;

function initThree() {
    renderer = new THREE.WebGLRenderer({
        antialias: true // 抗锯齿
    });

    renderer.setSize(window.innerWidth, window.innerHeight);// 设置WebGL画布大小
    renderer.setClearColor(0xEFEFEF, 1.0);// 设置WebGL背景色
    document.body.appendChild(renderer.domElement);// 添加到body标签中
}

function initCamera() {
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.x = 0;
    camera.position.y = 1000;
    camera.position.z = 0;
    camera.up.x = 0;
    camera.up.y = 0;
    camera.up.z = 1;
    camera.lookAt({
        x: 0,
        y: 0,
        z: 0
    });
}

function initScene() {
    scene = new THREE.Scene();
}

function initLight() {
    light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);// 方向光
    light.position.set(100, 100, 200);// 设置光源位置
}

function initObject() {
    var geometry = new THREE.Geometry(); // 创建一个几何类
    var material = new THREE.LineBasicMaterial({vertexColors: true}); // 线的材质
    var color1 = new THREE.Color(0x444444), color2 = new THREE.Color(0xFF0000);

    // 线的材质可以由2点的颜色决定
    var p1 = new THREE.Vector3(-100, 0, 100);
    var p2 = new THREE.Vector3(100, 0, -100);
    geometry.vertices.push(p1);
    geometry.vertices.push(p2);
    geometry.colors.push(color1, color2);

    var line = new THREE.Line(geometry, material, THREE.LineSegments);
    scene.add(line);
}

function start() {
    initThree();
    initCamera();
    initScene();
    initLight();
    initObject();
    renderer.clear();
    renderer.render(scene, camera);
}

start();
var addHorse = function () {


        scene.remove(front);
        
        scene.remove(frontedges);

        alert("A wild horse appears! Use your keyboard to move around. W = Away, S = Towards, A = Left, D = Right");

        var directionalLight = new THREE.DirectionalLight( 0xffeedd, 2 );
        directionalLight.position.set( 0, 2, 3 );
        scene.add( directionalLight );

        var loader = new THREE.JSONLoader();
        loader.load("models/horse.js", modelLoadedCallback);
        
        

      }





      function modelLoadedCallback(geometry, materials) {

    /* create the object from the geometry and materials that were loaded.  There
       can be multiple materials, which can be applied to the object using MeshFaceMaterials.
       Note tha the material can include references to texture images might finish
       loading later. */
       
    var object = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));

    /* Determine the ranges of x, y, and z in the vertices of the geometry. */

    var xmin = Infinity;
    var xmax = -Infinity;
    var ymin = Infinity;
    var ymax = -Infinity;
    var zmin = Infinity;
    var zmax = -Infinity;
    for (var i = 0; i < geometry.vertices.length; i++) {
        var v = geometry.vertices[i];
        if (v.x < xmin)
            xmin = v.x;
        else if (v.x > xmax)
            xmax = v.x;
        if (v.y < ymin)
            ymin = v.y;
        else if (v.y > ymax)
            ymax = v.y;
        if (v.z < zmin)
            zmin = v.z;
        else if (v.z > zmax)
            zmax = v.z;
    }
    
    /* translate the center of the object to the origin */
    var centerX = (xmin+xmax)/3;
    var centerY = (ymin+ymax)/3; 
    var centerZ = (zmin+zmax)/3;
    var max = Math.max(centerX - xmin, xmax - centerX);
    max = Math.max(max, Math.max(centerY - ymin, ymax - centerY) );
    max = Math.max(max, Math.max(centerZ - zmin, zmax - centerZ) );
    var scale = 10/max;
    object.position.set( -centerX, -centerY, -centerZ );
    console.log("Loading finished, scaling object by " + scale);
    console.log("Center at ( " + centerX + ", " + centerY + ", " + centerZ + " )");
    
    /* Create the wrapper, model, to scale and rotate the object. */
    
   
    model.add(object);
    model.scale.set(scale,scale,scale);
    rotateX = rotateY = 0;
    scene.add(model);
    
    moveModel(modelDirection);
 
    animate();

}
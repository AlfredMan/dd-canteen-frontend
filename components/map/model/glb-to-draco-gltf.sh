function glb-to-draco-gltf() {
  if [ $# -eq 0 ]; then
    echo "usage: $0 glb filename (without '.glb' at the end)"
    return
  fi

  gltf-pipeline -i ${1}.glb -o ${1}.gltf
  gltf-pipeline -i ${1}.gltf -o ${1}.draco.gltf -d
}

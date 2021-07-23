export const fadeOut = (elemId: string) => {
  const currentHotspot = document.getElementById(elemId);
  currentHotspot && currentHotspot.setAttribute('animation', 'property: components.material.material.opacity; to: 0; dur: 1000; easing: linear;');
}

export const fadeIn = (elemId: string) => {
  const currentHotspot = document.getElementById(elemId);
  currentHotspot && currentHotspot.setAttribute('animation', 'property: components.material.material.opacity; to: 1; dur: 1000; easing: linear;');
}
/*global AFRAME*/

import {bind} from './aframe-binder';

AFRAME.registerComponent('navigation_collider', {
  init: function () {
    this.timeSinceMouseDown = new Date()
    this.addEventListeners()
  },

  addEventListeners: function () {
    var sceneEl = this.el.sceneEl;
    var canvasEl = sceneEl.canvas;

    // Wait for canvas to load.
    if (!canvasEl) {
      sceneEl.addEventListener('render-target-loaded', bind(this.addEventListeners, this));
      return;
    }

    canvasEl.addEventListener('mousedown', bind(this.registerMouseDownTime, this))
    this.el.addEventListener('mouseup', bind(this.checkRayHit, this))
    
    canvasEl.addEventListener('touchstart', bind(this.registerMouseDownTime, this))
    this.el.addEventListener('touchend', bind(this.checkRayHit, this))
  },

  registerMouseDownTime : function()
  {
    this.timeSinceMouseDown = new Date()
  },

  checkRayHit : function(evt)
  {
    let movementTimeThreshold = .5
    let currentTime = new Date()
    let elapsedTime = currentTime - this.timeSinceMouseDown

    if(elapsedTime >= (movementTimeThreshold * 1000))
    {
      return;
    }

    if(evt.detail.intersection && evt.detail.intersection.point) 
      this.el.emit('raycast_intersection_event', evt.detail.intersection.point)
  }
})
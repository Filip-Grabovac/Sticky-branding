//footer animation setup

function initSimulation() {
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Events = Matter.Events,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Runner = Matter.Runner; // Added Runner

  var engine = Engine.create(),
    world = engine.world;
  var containerElement = document.querySelector(".tag-canvas");
  var containerWidth = containerElement.clientWidth + 2;
  var containerHeight = containerElement.clientHeight + 2;

  var render = Render.create({
    element: containerElement,
    engine: engine,
    options: {
      width: containerWidth,
      height: containerHeight,
      pixelRatio: 2,
      background: "transparent",
      border: "none",
      wireframes: false
    }
  });

  var ground = Bodies.rectangle(
    containerWidth / 2 + 160,
    containerHeight + 80,
    containerWidth + 320,
    160,
    { render: { fillStyle: "#000000" }, isStatic: true }
  );
  var wallLeft = Bodies.rectangle(
    -80,
    containerHeight / 2,
    160,
    containerHeight,
    { isStatic: true }
  );
  var wallRight = Bodies.rectangle(
    containerWidth + 80,
    containerHeight / 2,
    160,
    1200,
    { isStatic: true }
  );
  var roof = Bodies.rectangle(
    containerWidth / 2 + 160,
    -80,
    containerWidth + 320,
    160,
    { isStatic: true }
  );

  var border = 1;
  var radius = 20;

 var tag1 = Bodies.rectangle(containerWidth / 2 + 150, 500, 164, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://cdn.prod.website-files.com/676140583343cc8fbfe8a372/6789193a1aee61af8c9244d1_Frame%201171276634.webp",
        xScale: 0.5,
        yScale: 0.5
      }
    }
  });
  var tag2 = Bodies.rectangle(containerWidth / 2 + 150, 460, 240, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://cdn.prod.website-files.com/676140583343cc8fbfe8a372/6789193a1aee61af8c9244d1_Frame%201171276634.webp",
        xScale: 0.5,
        yScale: 0.5
      }
    }
  });
  var tag3 = Bodies.rectangle(containerWidth / 2 + 250, 420, 200, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://cdn.prod.website-files.com/676140583343cc8fbfe8a372/678919c0a05f25ac40021109_Frame%201171276633.webp",
        xScale: 0.5,
        yScale: 0.5
      }
    }
  });
  var tag4 = Bodies.rectangle(containerWidth / 2 - 75, 380, 160, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://cdn.prod.website-files.com/676140583343cc8fbfe8a372/678919c0a05f25ac40021109_Frame%201171276633.webp",
        xScale: 0.5,
        yScale: 0.5
      }
    }
  });
  
  var tag5 = Bodies.rectangle(
    containerWidth / 2 - 74,
    540,
    248,
    56,
    {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://cdn.prod.website-files.com/676140583343cc8fbfe8a372/678919c0a05f25ac40021109_Frame%201171276633.webp",
          xScale: 0.5,
          yScale: 0.5
        }
      }
    }
  );
  var tag6 = Bodies.rectangle(containerWidth / 2 + 174, 490, 105, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://cdn.prod.website-files.com/676140583343cc8fbfe8a372/678919c0a05f25ac40021109_Frame%201171276633.webp",
        xScale: 0.5,
        yScale: 0.5
      }
    }
  });
  var tag7 = Bodies.rectangle(containerWidth / 2 - 142, 440, 186, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://cdn.prod.website-files.com/676140583343cc8fbfe8a372/67891a125ae330834fcf7bff_Frame%201171276631.webp",
        xScale: 0.5,
        yScale: 0.5
      }
    }
  });
  var tag8 = Bodies.rectangle(containerWidth / 2 - 10, 260, 128, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://cdn.prod.website-files.com/676140583343cc8fbfe8a372/67891a125ae330834fcf7bff_Frame%201171276631.webp",
        xScale: 0.5,
        yScale: 0.5
      }
    }
  });
  var tag9 = Bodies.rectangle(containerWidth / 2 - 242, 420, 168, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://cdn.prod.website-files.com/676140583343cc8fbfe8a372/67891a125ae330834fcf7bff_Frame%201171276631.webp",
        xScale: 0.5,
        yScale: 0.5
      }
    }
  });
  var tag10 = Bodies.rectangle(containerWidth / 2 + 60, 380, 155, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://cdn.prod.website-files.com/676140583343cc8fbfe8a372/6789193a1aee61af8c9244d1_Frame%201171276634.webp",
        xScale: 0.5,
        yScale: 0.5
      }
    }
  });
  var tag11 = Bodies.rectangle(containerWidth / 2, 360, 180, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://cdn.prod.website-files.com/676140583343cc8fbfe8a372/6789193a1aee61af8c9244d1_Frame%201171276634.webp",
        xScale: 0.5,
        yScale: 0.5
      }
    }
  });
  var tag12 = Bodies.rectangle(containerWidth / 2 - 59, 260, 172, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://cdn.prod.website-files.com/676140583343cc8fbfe8a372/67891a125ae330834fcf7bff_Frame%201171276631.webp",
        xScale: 0.5,
        yScale: 0.5
      }
    }
  });
  var tag13 = Bodies.rectangle(containerWidth / 2 - 59, 260, 115, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://cdn.prod.website-files.com/676140583343cc8fbfe8a372/67891a125ae330834fcf7bff_Frame%201171276631.webp",
        xScale: 0.5,
        yScale: 0.5
      }
    }
  });
  var tag14 = Bodies.rectangle(containerWidth / 2 - 59, 260, 210, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://cdn.prod.website-files.com/676140583343cc8fbfe8a372/67891a125ae330834fcf7bff_Frame%201171276631.webp",
        xScale: 0.5,
        yScale: 0.5
      }
    }
  });
  var tag15 = Bodies.rectangle(containerWidth / 2 - 59, 260, 145, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://cdn.prod.website-files.com/676140583343cc8fbfe8a372/67891a125ae330834fcf7bff_Frame%201171276631.webp",
        xScale: 0.5,
        yScale: 0.5
      }
    }
  });

   World.add(engine.world, [
    ground,
    wallLeft,
    wallRight,
    roof,
    tag1,
    tag2,
    tag3,
    tag4,
    tag5,
    tag6,
    tag7,
    tag8,
    tag9,
    tag10,
    tag11,
    tag12,
    tag13,
    tag14,
    tag15
  ]);

  var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

  World.add(world, mouseConstraint);
  render.mouse = mouse;

  mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
  mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

  let click = false;

  document.addEventListener("mousedown", () => (click = true));
  document.addEventListener("mousemove", () => (click = false));
  document.addEventListener("mouseup", () =>
    console.log(click ? "click" : "drag")
  );

  Events.on(mouseConstraint, "mouseup", function (event) {
    var mouseConstraint = event.source;
    var bodies = engine.world.bodies;
    if (!mouseConstraint.bodyB) {
      for (i = 0; i < bodies.length; i++) {
        var body = bodies[i];
        if (click === true) {
          if (
            Matter.Bounds.contains(body.bounds, mouseConstraint.mouse.position)
          ) {
            var bodyUrl = body.url;
            console.log("Body.Url >> " + bodyUrl);
            if (bodyUrl != undefined) {
              window.open(bodyUrl, "_blank");
              console.log("Hyperlink was opened");
            }
            break;
          }
        }
      }
    }
  });

  var runner = Runner.create(); // Added Runner
  Runner.run(runner, engine);   // Replaced Engine.run(engine)
  Render.run(render);

var allBodies = [tag1, tag2, tag3, tag4, tag5, tag6, tag7, tag8, tag9, tag10, tag11, tag12, tag13, tag14, tag15];
  
  function resizeBodies() {
      let scaleFactor = window.innerWidth < 768 ? 0.5 : 1;

    allBodies.forEach((body) => {
      Matter.Body.scale(body, scaleFactor, scaleFactor);
      if (body.render.sprite) {
        body.render.sprite.xScale *= scaleFactor;
        body.render.sprite.yScale *= scaleFactor;
      }
    });

    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: containerWidth, y: containerHeight }
    });
  }

  // Run resize logic initially and on window resize
  resizeBodies();
  window.addEventListener("resize", function () {
    //resizeBodies();
  });
}

var containerElement = document.querySelector(".tag-canvas");


//footer animation

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.tag-element',
    start: 'top 70%',
    end: 'bottom 20%',
    preventOverlaps: true,
    onEnter: (self) => {
      if (self.trigger === document.querySelector('.tag-element')) {
        tl.play();
      }
    }
  }
});


tl.to(".tag-element", {
  height: '100%',
  duration: 1.5
})
.call(() => {
  gsap.to(".pre-footer-text", { opacity: 0.3, duration: 1 });
  initSimulation();
});

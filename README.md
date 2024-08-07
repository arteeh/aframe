My playground repo for a-frame. Mostly ramblings below

# Component ideas

Social components for a-frame sites. Banter, but decentralized.

### Site explorer UI
UI for browsing (compatible) sites. Directus API + Postgres database as a backend.

Link traversal sample:\
https://aframe.io/aframe/examples/showcase/link-traversal/index.html

### Avatar system
existing avatar system, static presets:\
https://github.com/networked-aframe/naf-valid-avatars

### Multiplayer system
existing networking system for sites to use:\
https://github.com/networked-aframe/networked-aframe

### Proximity voice system

### Browser extension
Browser extension that injects a-frame entities like the site explorer UI into every a-scene.

Browser extension example:\
https://github.com/mdn/webextensions-examples/tree/main/borderify

# Site ideas

Ideas for a-frame sites to build

## Hub

My personal site. Portals to all my other sites and socials.

## Greenhouse

A simple island with a greenhouse, ported from Banter

## Linux Terminal site

Access a linux server in virtual space. Enter an domain name or IP address, login and a physical terminal will appear, alongside server and container statistics.

## Live Home

Site where the environment is generated and automatically updated based on one player's camera and depth sensor input.

Camera -> ORB-SLAM -> GLTF Model/Texture to all clients in the space

Or if you're piloting a robot, use the robot's camera and 6dof face as the source. The robot emulates a VR headset and controllers and is a player in the site.

## Multiplayer Arcade

- Table tennis
- Table football
- Mini golf
- Hoop throwing
- Ice hockey game thing

aframe netcode based on mqtt\
mqttnet client in blazor

server side physics and room features can each be a different program\
mqtt topic tree is the single point of truth and the only stateful part of a space

When a player touches (or holds) an item (like a paddle), they should overwrite position and velocity of that object on mqtt. Any object that touches that item in turn is also up to the player to update. This is to increase accuracy when a player performs detailed moves with objects, like hitting a ball with a paddle 

benefit of server side physics:\
existing physics state and activity still works if all players leave\
Hosters/owners have no advantage in competitive games

optimization:
- client arteeh posts FOV euler to topic players/arteeh/fov
- service tracks all visible objects
- reads every active player's player/.../fov, does math, writes topic strings of every object within FOV to player/.../fov

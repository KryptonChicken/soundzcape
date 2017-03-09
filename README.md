# Soundzcape

[![CircleCI][circle badge]][circle link]
[![TravisCI][travis badge]][travis link]
[![Gitter][gitter badge]][gitter link]
[![XO][xo badge]][xo link]

Soundzcape is a 2D music [platformer] with maps procedurally generated from
sound waves. This project is fully open source and [Apache 2] licensed.

We have a Gitter channel [here][gitter room], feel free to talk to us!

## Development

We use Docker to manage our development, continuous integration and production
environment. Each part of the application stack is isolated in a container and
can be controlled as a group using docker-compose. You can start the
development server using the following command:

```
$ docker-compose up --build
```

The containers can be ran without building after the first time unless one of
the configurations is modified. Omit `--build` to run Soundzcape without
building, ie `docker-compose up`. After starting the containers,
`http://localhost` should become available immediately. You can invoke commands
in a specific containers using the `run` option:

```
// Drop into a shell:
$ docker-compose run nginx sh

// Run frontend test (xo-lint):
# docker-compose run webpack npm run test
```

The names of the containers are `nginx`, `webpack` and `python`.

### Detach mode

You will be attached to the containers automatically when using the `up`
command. If you prefer the containers to stay in the background:

```
$ docker-compose up --build -d
```

Stop all running containers and delete untagged images and volumes:

```
$ docker-compose down --rmi local -v
```

[circle badge]: https://circleci.com/gh/KryptonChicken/soundzcape.svg?style=shield
[circle link]: https://circleci.com/gh/KryptonChicken/soundzcape
[travis badge]: https://travis-ci.org/KryptonChicken/soundzcape.svg?branch=dev
[travis link]: https://travis-ci.org/KryptonChicken/soundzcape
[apache 2]: https://www.apache.org/licenses/LICENSE-2.0
[gitter badge]: https://badges.gitter.im/KryptonChicken/soundzcape.svg
[gitter link]: https://gitter.im/KryptonChicken/soundzcape?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
[xo badge]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo link]: https://github.com/sindresorhus/xo
[platformer]: https://en.wikipedia.org/wiki/Platform_game
[Apache 2]: https://www.apache.org/licenses/LICENSE-2.0
[gitter room]: https://gitter.im/KryptonChicken/soundzcape
[platformer]: https://en.wikipedia.org/wiki/Platform_game

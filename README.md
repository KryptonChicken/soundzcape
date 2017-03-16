# Soundzcape

[![CircleCI][circle badge]][circle link]
[![TravisCI][travis badge]][travis link]
[![Gitter][gitter badge]][gitter link]
[![XO][xo badge]][xo link]

Soundzcape is a 2D music [platformer] with game maps procedurally generated
from sound waves. This is an open source project licensed under [Apache 2], any
contributions are welcome!

We have a Gitter channel [here][gitter room], feel free to talk to us!

## Development

We use Docker to manage our development, continuous integration and production
environments. Each part of the application stack is isolated in a container and
can be controlled as a group using docker-compose. You can start the
development server using the following command:

```
$ docker-compose up --build
```

You only need to build the docker image for the first time, which will take a
few minutes. The containers can then be started with just `docker-compose up`.
With the development environments set up, you can visit `http://localhost` to
see your changes in real time. You can invoke commands in a specific containers
using the `run` option:

```sh
# Drop into a shell:
$ docker-compose run nginx sh

# Run frontend test (xo-lint):
$ docker-compose run webpack npm run test
```

The names of the containers are `nginx`, `webpack` and `python`.

### Detach mode

You will be attached to the containers automatically when using the `up`
command. If you prefer the containers to stay in the background:

```
$ docker-compose up --build -d
```

To stop and remove the running containers:

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

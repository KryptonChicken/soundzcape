# Soundzcape

[![Gitter][gitter_badge]][gitter_link]
[![XO code style][xo_badge]][xo_link]

Soundzcape is a 2D music [platformer] with maps procedurally generated from
sound waves. This project is fully open source and [Apache 2] licensed.

We have a Gitter channel [here][gitter_room], feel free to talk to us!

## Development

We use Docker to manage our development, continuous integration and production
environment. Since we have multiple containers, docker-compose is used to
control the application as a whole.

1. Fork this repository.

2. Clone it to your local machine:

  ```
  $ git clone http://github.com/<username>/soundzcape
  ```

3. Build and run containers with docker-compose:

  ```
  $ docker-compose up --build

  # Stop running containers with [ctrl-c]
  ```

  **Note:** You only need to build the containers for the first time or when
  you changed some application configurations. Omit `--build` to run Soundzcape
  without building.

After starting the containers, `http://localhost` should become available
immediately. You can run additional commands in a container using the `run`
option. For example, to drop into a shell in the webpack container:

    $ docker-compose run webpack sh

Replaces `webpack` with `nginx` or `python` if required.

You will be attached to the containers automatically when using the command in
step 3. If you prefer the containers to stay in the background:

```
$ docker-compose up --build -d

# Stop running containers:
$ docker-compose down --rmi local -v
```

[apache 2]: https://www.apache.org/licenses/LICENSE-2.0
[gitter_badge]: https://badges.gitter.im/KryptonChicken/soundzcape.svg
[gitter_link]: https://gitter.im/KryptonChicken/soundzcape?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
[xo_badge]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo_link]: https://github.com/sindresorhus/xo
[platformer]: https://en.wikipedia.org/wiki/Platform_game
[Apache 2]: https://www.apache.org/licenses/LICENSE-2.0
[gitter_room]: https://gitter.im/KryptonChicken/soundzcape
[platformer]: https://en.wikipedia.org/wiki/Platform_game

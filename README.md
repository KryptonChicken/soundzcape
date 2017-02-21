# Soundzcape

[![Gitter][gitter_badge]][gitter_link]

Soundzcape is a 2D music [platformer] with maps procedurally generated from
sound waves. This project is fully open source and [Apache 2] licensed.

We have a Gitter channel [here][gitter_room], feel free to talk to us!

## Development

**Docker** is heaily used throughout Soundzcape for both development and
production. Since each parts of the application stack are contained in their
own container, we use **docker-compose** to manage them as a whole.

Here are the commands to manage the development environment:

    # Build and run:
    $ docker-compose up --build -d

    # Just run (require previous build):
    $ docker-compose up -d

    # Stop:
    $ docker-compose down --rmi local -v

After starting the containers, `http://localhost` should become available
immediately.

[gitter_badge]: https://badges.gitter.im/KryptonChicken/soundzcape.svg
[gitter_link]: https://gitter.im/KryptonChicken/soundzcape?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
[platformer]: https://en.wikipedia.org/wiki/Platform_game
[Apache 2]: https://www.apache.org/licenses/LICENSE-2.0
[gitter_room]: https://gitter.im/KryptonChicken/soundzcape

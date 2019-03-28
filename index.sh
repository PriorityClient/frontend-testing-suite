#!/usr/bin/env bash

selenium-side-runner -c "browserName=chrome" ./vendor.side
selenium-side-runner -c "browserName=firefox" ./vendor.side


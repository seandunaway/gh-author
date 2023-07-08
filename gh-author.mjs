#!/usr/bin/env node

import {exit} from 'node:process'
import {parseArgs} from 'node:util'

let args = parseArgs({
    options: {'co-authored-by': {type: 'boolean', short: 'c'}},
    strict: false,
})
if (! args.positionals[0]) {
    console.error('usage: [-c|--co-authored-by] <username>')
    exit(1)
}

let response
try {
    response = await (await fetch(`https://api.github.com/users/${args.positionals[0]}`)).json()
} catch (error) {
    console.error(error.message)
    exit(1)
}

let prefix = args.values['co-authored-by'] ? 'Co-authored-by: ' : ''
let name = response.name || response.login
let email = response.email || `${response.id}+${response.login}@users.noreply.github.com`

console.info(`${prefix}${name} <${email}>`)

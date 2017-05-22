import test from 'tape'
import colorize from 'tap-colorize'

test.createStream().pipe(colorize()).pipe(process.stdout)

export default test

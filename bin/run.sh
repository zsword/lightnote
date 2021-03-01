#!/bin/sh

SCRIPTPATH=$(cd "$(dirname "$0")"; pwd)
"$SCRIPTPATH/lightnote.exe" -importPath github.com/leanote/leanote -srcPath "$SCRIPTPATH/src" -runMode prod

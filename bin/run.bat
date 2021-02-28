@echo off
title LeaNote

cd %~dp0
cd ..
set SCRIPTPATH=%cd%
cd bin
: top src directory
set leanotePath="%SCRIPTPATH%\bin\src\github.com\leanote"

: create software link
if exist "%leanotePath%\leanote" del /Q "%leanotePath%\leanote"
mklink /D "%leanotePath%\leanote"  %SCRIPTPATH%

call lightnote.exe -importPath github.com/leanote/leanote -srcPath "./src" -runMode prod
cd %~dp0
pause

@echo off
title Build LightNote

cd %~dp0
cd ..\
rmdir /S/Q target
call revel build /m prod /a .
call gulp
xcopy messages\ target\messages\ /E /Y /Q
cd target
rmdir /S/Q app
for /d %%f in (src\github.com\leanote\leanote\*) do (
  move /Y %%f .\
)
cd %~dp0
pause
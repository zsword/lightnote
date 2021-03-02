@echo off
title Build LightNote

cd %~dp0
cd ..
call revel build /m prod /a ./
call gulp
xcopy messages\ target\messages\ /E /Y /Q
cd %~dp0
pause
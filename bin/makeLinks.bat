@echo off
title Make Dev

cd %~dp0
%~d0
cd ..
mklink /D files D:\Learn-Docs\lightnote\files\
pause
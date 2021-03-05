@echo off
title Make Dev

cd %~dp0
%~d0
cd ..
set NOTE_BASE=E:\Learn-Docs\lightnote
mklink /J files %NOTE_BASE%\files\
mklink /J public\upload %NOTE_BASE%\public\upload
pause
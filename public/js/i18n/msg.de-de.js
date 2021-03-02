var MSG={"app":"Leanote\r","share":"Teilen\r","noTag":"Keine Tags\r","inputUsername":"Füge Nutzernamen ein\r","inputEmail":"E-Mail ist erforderlich\r","inputPassword":"Passwort ist erforderlich\r","inputPassword2":"Bitte füge dein neues Passwort ein\r","confirmPassword":"Passwort stimmt nicht überein\r","history":"Verlauf\r","editorTips":"Tipps\r","editorTipsInfo":"<h4>1. Kurzbefehle</h4>ctrl+shift+c Ansicht ändern<h4>2. shift+enter Den aktuellen Block verlassen</h4> eg. <img src=\"/images/outofcode.png\" style=\"width: 90px\"/> in dieser Situation nutze shift+enter um den derzeitigen Block zu verlassen.\r","all":"Neueste\r","trash":"Papierkorb\r","delete":"Löschen\r","unTitled":"Ohne Titel\r","defaultShare":"Standard Freigabe\r","writingMode":"Schreibmodus\r","normalMode":"Normaler Modus\r","saving":"Speichern\r","saveSuccess":"Speichern erfolgreich\r","update":"Aktualisierung\r","close":"Schliessen\r","cancel":"Abbrechen\r","send":"Absenden\r","shareToFriends":"Teile mit Anderen\r","publicAsBlog":"Veröffentlichen als Blog\r","cancelPublic":"Veröffentlichung zurückziehen\r","move":"Verschieben\r","copy":"Kopieren\r","rename":"Umbenennen\r","exportPdf":"Export als PDF\r","addChildNotebook":"Erstelle Unter-Notizbuch\r","deleteAllShared":"Lösche gemeinsame Nutzer\r","deleteSharedNotebook":"Lösche gemeinsame Notiz\r","copyToMyNotebook":"Kopiere zu meinen Notizen\r","checkEmail":"Überprüfe E-Mail\r","sendVerifiedEmail":"Schicke Bestätigungsmail\r","friendEmail":"E-Mail des Freundes\r","readOnly":"Nur lesen\r","writable":"Schreibrechte\r","inputFriendEmail":"E-Mail-Adresse deines Freundes wird benötigt\r","clickToChangePermission":"Klicke, um Erlaubniss zu ändern\r","sendInviteEmailToYourFriend":"Schicke deinem Freund eine E-Mail-Benachrichtigung\r","friendNotExits":"Dein Freund besitzt kein %s's Konto, Einladungs-Benachrichtigung verschicken: %s\r","emailBodyRequired":"E-Mail-Inhalt ist notwendig\r","sendSuccess":"Erfolgreich\r","inviteEmailBody":"Hallo, ich bin %s, %s ist grossartig, schau es dir an!\r","historiesNum":"Wir haben deine letzten <b>10</b> Einträge gespeichert.\r","noHistories":"Kein Verlauf\r","fold":"Einklappen\r","unfold":"Ausklappen\r","datetime":"Datum und Zeit\r","restoreFromThisVersion":"Wiederherstellen von dieser Version\r","confirmBackup":"Bist du sicher, dass du von dieser Version wiederherstellen willst? Wir werden die aktuelle Version speichern.\r","createAccountSuccess":"Konto-Erstellung erfolgreich\r","createAccountFailed":"Fehler beim Erstellen des Kontos\r","updateUsernameSuccess":"Aktualisierung des Nutzernamens war erfolgreich\r","usernameIsExisted":"Nutzername existiert bereits\r","noSpecialChars":"Nutzername darf keine Sonderzeichen enthalten\r","minLength":"Die Länge muss mindestens %s Zeichen betragen\r","errorEmail":"Bitte füge die richtige E-Mail ein\r","verifiedEmaiHasSent":"Die Verifizierungs-E-Mail wurde verschickt, bitte checke deine E-Mail.\r","emailSendFailed":"E-Mail-Verifizierung fehlgeschlagen\r","inputNewPassword":"Neues Passwort ist erforderlich\r","errorPassword":"Die länge des Passwortes sollte mindestenns 6 Zeichen und so komplex wie möglich sein\r","updatePasswordSuccess":"Aktualiseren des Passwortes erfolgreich\r","Please save note firstly!":"Bitte die Notiz zuerst speichen!\r","Please sign in firstly!":"Bitte zuerst anmelden!\r","Are you sure ?":"Sind Sie sicher ?\r","Are you sure to install it ?":"Soll das wirklich installiert werden ?\r","Are you sure to delete":"Wirklich löschen\r","Success":"Erfolgreich\r","Error":"Fehler\r","File exists":"Datei bereits vorhanden\r","Delete file":"Datei löschen\r","No images":"Keine Bilder\r","Filename":"Dateiname\r","Group Title":"Gruppenname\r","Hyperlink":"Hyperlink\r","Please provide the link URL and an optional title":"Bitte Link URL und einen optionalen Titel angeben\r","optional title":"Optionaler Titel\r","Cancel":"Abbrechen\r","Strong":"Fett\r","strong text":"Text in Fettschrift\r","Emphasis":"Kursiv\r","emphasized text":"Kursiver Text\r","Blockquote":"Blockzitat\r","Code Sample":"Code-Schnipsel\r","enter code here":"Code hier eingeben\r","Image":"Bild\r","Heading":"Überschrift\r","Numbered List":"Nummerierte Liste\r","Bulleted List":"Aufzählungsliste\r","List item":"Listenelement\r","Horizontal Rule":"Horizontale Trennlinie\r","Markdown syntax":"Markdown Syntax\r","Undo":"Rückgängig\r","Redo":"Wiederholen\r","enter image description here":"Beschreibung des Bildes hier eingeben\r","enter link description here":"Beschreibung des Links hier eingeben\r","Edit mode":"Bearbeiten Modus\r","Vim mode":"Vim Modus\r","Emacs mode":"Emacs Modus\r","Normal mode":"Normaler Modus\r","Normal":"Normal\r","Light":"Light\r","Light editor":"Light Editor\r","Add Album":"Album hinzufügen\r","Cannot delete default album":"Standard Album kann nicht gelöscht werden\r","Cannot rename default album":"Standard Album kann nicht umbenannt werden\r","Rename Album":"Album umbenennen\r","Add Success!":"Hinzufügen erfolgreich!\r","Rename Success!":"Umbenennen erfolgreich!\r","Delete Success!":"Löschen erfolgreich!\r","Are you sure to delete this image ?":"Soll dieses Bild wirklich gelöscht werden ?\r","click to remove this image":"Klicken um dieses Bild zu löschen\r","error":"Fehler\r","Prev":"Vorheriges\r","Next":"Nächstes"};function getMsg(key, data) {var msg = MSG[key];if(msg) {if(data) {if(!isArray(data)) {data = [data];}for(var i = 0; i < data.length; ++i) {msg = msg.replace("%s", data[i]);}}return msg;}return key;}
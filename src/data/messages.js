/**
 * Copyright (c) 2016-2017 Structured Data, LLC
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to 
 * deal in the Software without restriction, including without limitation the 
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or 
 * sell copies of the Software, and to permit persons to whom the Software is 
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in 
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

"use strict";

module.exports = {

  Main: {

    // status notifications

    EDITOR: "Editor",
    SHELL: "Shell",
    CHANGE_FOCUS: "$1 has focus",
    CHANGE_FOCUS_LONG: "$1 has focus (use $2 to switch)",
    // WINDOW_SWITCH_SHORTCUT: "Ctrl+E",
    SPLITTER_DRAG: "Layout: $1% / $2%",
    
    INVALID_SETTINGS_FILE: "Invalid settings file",

    // dialog titles

    ERROR: "ERROR",
    WARNING: "WARNING",
    
    // dialog messages and buttons

    READING_FILE: "reading file $1",
    WRITING_FILE: "writing file $1",
    NOT_CONNECTED: "Not connected to Excel/R",

    // specific to the update available message

    UPDATE_AVAILABLE: "Version $1 is available",
    DOWNLOAD: "Download page",
    IGNORE: "Don't notify me again",

    // general buttons

    OK: "OK",
    CANCEL: "Cancel",

    // downloading 

    TRYING_URL: "Trying URL",
    DOWNLOADING: "Downloading",
    DOWNLOAD_COMPLETE: "Download Complete",
    DOWNLOAD_FAILED: "Download Failed",
    MISSING_DEST_FILE: "Missing destination file",

    // packages 

    INSTALLED: "installed",
    PACKAGE_SELECTED: [
      "$1 Package selected",
      "$1 Packages selected"
    ],

    FILTER: "Filter...",
    LOADING_PACKAGE_LIST: "Loading package list, please wait...",
    AVAILABLE_PACKAGES: "Available Packages",
    FILTER_NAME_ONLY: "Filter on Package Name Only",
    HTTPS_MIRRORS_ONLY: "HTTPS Mirrors Only",

    // mirrors

    SELECT_MIRROR: "Select a CRAN Mirror",
    LOADING_MIRROR_LIST: "Loading mirror list, please wait...",

  },

  Editor: {

    UNTITLED: "Untitled",
    READY: "Ready",

    // status info

    LINE_COL: "Line $1, Col $2",
    LANGUAGE: "Language: $1",

    // when you click close before saving

    QUERY_SAVE: "Save changes to $1?",
    SAVE: "Save",
    DONT_SAVE: "Don't Save",
    CANCEL: "Cancel",

    // context menu actions

    CONTEXT_EXECUTE_SELECTED_CODE: 'Execute selected code',
    CONTEXT_EXECUTE_BUFFEER: 'Execute entire file',

    // save before closing?

    CHECK_SAVE_YES: "Yes",
    CHECK_SAVE_NO: "No", 
    CHECK_SAVE_CANCEL: "Cancel",
    CHECK_SAVE_DIALOG_TITLE: "Save Changes?", 
    CHECK_SAVE_DIALOG_MESSAGE: "$1 has unsaved changes.\nClick Yes to save, No to close without saving.",
    CHECK_SAVE_DIALOG_DETAIL: "If you accidentally close a file without saving, use $1 to recover it.",
    // UNCLOSE_TAB_SHORTCUT: 'Ctrl+Shift+T',
    
    // file dialog

    R_FILES_PATTERN: 'R Files',
    ALL_FILES_PATTERN: 'All Files',

    // errors

    FILE_READ_ERROR: "File read error", 
    FILE_WRITE_ERROR: "File write error",

    // warning

    FILE_CHANGED_WARNING_TITLE: "Save Warning",
    FILE_CHANGED_WARNING_MESSAGE:"This file has changed on disk.",
    FILE_CHANGED_WARNING_DETAIL: "To avoid losing data, you should save this file with a different name.",

  }

};


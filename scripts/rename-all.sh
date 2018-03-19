#!/bin/bash
###############################################################
# Details: Rename all images in the public folder with a UUID #
# Requirements: uuid                                          #
###############################################################

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

find ${DIR}/../public -type f | while read file; do
  if [[ "$file" == *".gitkeep" ]];then
    continue;
  fi

  ext=${file##*.}
  mv "${file}" "$(dirname "${file}")/`uuid`.${ext}"
done

find ${DIR}/../public-sfw -type f | while read file; do
  if [[ "$file" == *".gitkeep" ]];then
    continue;
  fi

  ext=${file##*.}
  mv "${file}" "$(dirname "${file}")/`uuid`.${ext}"
done

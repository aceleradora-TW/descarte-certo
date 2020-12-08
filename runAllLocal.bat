set REACT_APP_IS_LOCAL_BACKEND=true
gradlew stage
java -jar -Dspring.profiles.active=dev build/libs/descarte-certo.jar

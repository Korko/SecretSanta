@extends('emails/layout')

@yield('title', "Message de {{ $targetName }}")

@section('content')
    <blockquote>{!! nl2br(htmlentities( $content )) !!}</blockquote>
@endsection
